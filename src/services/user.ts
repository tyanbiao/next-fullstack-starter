import * as Boom from '@hapi/boom'
import { User } from '@prisma/client'
import prisma from '../common/lib/prisma'

export interface CreateUserDTO {
  uid?: string
  role_id: number
  name?: string
  username: string
  email: string
  password: string
  is_active?: boolean
  is_initialized?: boolean
  created_at?: Date
}

export interface UpdateUserDTO {
  id: number
  role_id: number
  name?: string
  username: string
  email: string
  password: string
  is_active?: boolean
  is_initialized?: boolean
  updated_at?: Date
}

export async function createUser(dto: CreateUserDTO): Promise<User> {
  if (dto.uid) {
    const exists = await prisma.user.findUnique({
      where: {
        uid: dto.uid,
      },
    })
    if (exists) {
      throw Boom.badData('User already exists')
    }
  }
  const existsUsers = await prisma.user.findMany({
    where: {
      OR: [
        {
          email: dto.email,
        },
        {
          username: dto.username,
        },
      ],
    },
  })
  if (existsUsers.length > 0) {
    throw Boom.badData('User already exists')
  }
  return await prisma.user.create({
    data: dto,
  })
}

export function updateUser(dto: UpdateUserDTO): Promise<User> {
  const { id, ...properties } = dto
  return prisma.user.update({
    where: {
      id,
    },
    data: properties,
  })
}

export function deleteUser(id: number): Promise<User> {
  return prisma.user.delete({
    where: {
      id,
    },
  })
}

export function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      role: true,
    },
  })
}

export async function listUsers() {
  return prisma.user.findMany({
    include: {
      role: true,
    },
  })
}
