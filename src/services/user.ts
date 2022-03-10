import * as Boom from '@hapi/boom'
import { User } from '@prisma/client'
import prisma from '../common/lib/prisma'
import { exclude } from '../utils/prisma.util'

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
  role_id?: number
  name?: string
  username?: string
  email?: string
  password?: string
  is_active?: boolean
  is_initialized?: boolean
  updated_at?: Date
}

export interface ValidateUserDTO {
  email: string
  password: string
}

export async function createUser(dto: CreateUserDTO): Promise<User> {
  // dto.password = await bcrypt.hash(dto.password, 10)
  try {
    return await prisma.user.create({
      data: dto,
    })
  } catch (e: any) {
    throw Boom.badRequest(e.message || 'create failure')
  }
}

export async function updateUser(uid: string, dto: UpdateUserDTO) {
  if (dto.password) {
    // hash password
    // dto.password = await bcrypt.hash(dto.password, 10)
  }
  const user = await prisma.user.update({
    where: {
      uid,
    },
    data: dto,
  })
  return exclude(user, 'password', 'id')
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

export async function getUserByUid(uid: string) {
  const user = await prisma.user.findUnique({
    where: {
      uid,
    },
    include: {
      role: true,
    },
  })
  if (user) {
    return exclude(user, 'password', 'id')
  }
  return user
}

export async function listUsers() {
  return prisma.user.findMany({
    include: {
      role: true,
    },
  })
}
