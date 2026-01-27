import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordPlain = 'moisesdev9134'

  // hash password
  const hashedPassword = await bcrypt.hash(passwordPlain, 10)

  // create user
  const user = await prisma.user.upsert({
    where: {
      email: 'moiseslugo9134@gmail.com',
    },
    update: {},
    create: {
      name: 'Moises Lugo',
      username: 'moiseslugo',
      email: 'moiseslugo9134@gmail.com',
      password: hashedPassword,
      bio: 'Frontend developer',
      role: Role.ADMIN,
    },
  })

  console.log('✅ Admin user created:', user.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
