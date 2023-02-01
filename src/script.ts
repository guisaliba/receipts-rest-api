import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
const port = 3030;

app.use(express.json())

app.get('/authors', async (req: any, res: any) => {
  const authors = await prisma.author.findMany()
  if (!authors) {
    res.json('No authors were found.')
  } else {
    res.send(authors)
  }
})

app.get('/receipts', async (req: any, res: any) => {
  const receipts = await prisma.receipt.findMany({
    where: { published: true },
    include: { author: true },
  });
  if (!receipts) {
    res.json('No receipts were found.')
  } else {
    res.json(receipts)
  }
})

app.get('/receipt/:id', async (req: any, res: any) => {
  const { id } = req.params
  const receipt = await prisma.receipt.findUnique({
    where: { id: Number(id) },
  });
  if (!receipt) {
    res.json('Could not retrieve receipt.')
  } else {
    res.json(receipt);
  }
})

app.post('/author', async (req: any, res: any) => {
  const result = await prisma.author.create({
    data: { ...req.body },
  });
  if (!result) {
    res.json('Could not create author.')
  } else {
    res.json(result)
  }
})

app.post('/receipt', async (req: any, res: any) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.receipt.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } }
    }
  })
  if (!result) {
    res.json('Could not create receipt.')
  } else {
    res.json(result)
  }
})

app.put('/receipt/publish/:id', async (req: any, res: any) => {
  const { id } = req.params
  const receipt = await prisma.receipt.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  if (!receipt) {
    res.json('Could not publish receipt. Receipt id is incorrect or it has been already published.')
  } else {
    res.json(receipt)
  }
})

app.put('/receipt/unpublish/:id', async (req: any, res: any) => {
  const { id } = req.params
  const receipt = await prisma.receipt.update({
    where: { id: Number(id) },
    data: { published: false },
  })
  if (!receipt) {
    res.json('Could not unpublish receipt. Receipt id is incorrect or it has not been published yet.')
  } else {
    res.json(receipt)
  }
})

app.delete('/receipt/:id', async (req: any, res: any) => {
  const { id } = req.params
  const receipt = await prisma.receipt.delete({
    where: { id: Number(id) },
  })
  if (!receipt) {
    res.json('Could not delete receipt. Receipt id is incorrect or it does not exist.')
  } else {
    res.json(receipt)
  }
})

app.listen(port, () => {
  console.log(`🔥 Server up and running at localhost:${port}`)
});