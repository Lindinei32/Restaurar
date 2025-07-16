import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o processo de seeding...');

  // --- ETAPA DE LIMPEZA ---
  console.log('Limpando dados antigos...');
  await prisma.curso.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('Criando novos dados...');

  // --- CRIANDO O USUÁRIO ADMINISTRADOR ---
  await prisma.user.create({
    data: {
      name: 'Lindinei',
      email: 'saleslindinei0@gmail.com',
      role: 'ADMIN',
    },
  });
  console.log('Usuário Administrador criado com sucesso.');

  // --- CRIANDO UM ÚNICO CURSO COM QUATRO AULAS SEQUENCIAIS ---
  await prisma.curso.create({
    data: {
      // Usaremos os dados do primeiro curso como o "curso principal"
      nome: 'Jesus, Restaurador da Vida',
      slug: 'jesus-restaurador-da-vida',
      descricao:
        'Descubra o poder restaurador da fé em Jesus Cristo e aprenda a aplicar os ensinamentos bíblicos para transformar sua vida. Neste curso, exploraremos temas como esperança, redenção e renovação espiritual.',
      imagemUrl: '/Curso1.png',
      modulos: {
        create: [
          // Criamos um único módulo para conter todas as aulas
          {
            nome: 'Introdução a Vida Cristã',
            ordem: 1,
            imagemUrl: '/modulo1.png',

            // <-- A GRANDE MUDANÇA ESTÁ AQUI 👇
            // Todas as aulas são criadas dentro deste único módulo
            aulas: {
              create: [
                // AULA 1
                {
                  nome: 'Aula 1: O Poder Restaurador',
                  ordem: 1, // Ordem sequencial
                  descricao: 'Uma aula fundamental sobre os primeiros passos na fé e o poder transformador de Jesus.',
                  videoUrl: 'https://youtu.be/994aStMhQpM?si=1_Q_Z-rmVO-JCl9L',
                },
                // AULA 2
                {
                  nome: 'Aula 2: Liderança com Sabedoria',
                  ordem: 2, // Ordem sequencial
                  descricao:
                    'Descubra como os ensinamentos de Jesus podem ser aplicados na sua liderança pessoal e profissional.',
                  videoUrl: 'https://youtu.be/kpJpeugrlkU?si=dut1GznlrcK4dcjY',
                },
                // AULA 3
                {
                  nome: 'Aula 3: A Manifestação do Amor',
                  ordem: 3, // Ordem sequencial
                  descricao:
                    'Uma aula dedicada a explorar os milagres e o caráter de Jesus, revelando seu amor incondicional.',
                  videoUrl: 'https://youtu.be/tjgFHeI9JGs?si=LgRrY3mAb4esN4C2',
                },
                // AULA 4
                {
                  nome: 'Aula 4: Nascido de Novo',
                  ordem: 4, // Ordem sequencial
                  descricao:
                    'Entenda o significado bíblico de ser uma nova criatura e como viver essa nova identidade em Cristo.',
                  videoUrl: 'https://youtu.be/6xzJcaZtXQM?si=x5LvISD_R0iokhXv',
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('Curso com aulas sequenciais criado com sucesso.');
  console.log('Seeding finalizado!');
}

main()
  .catch(e => {
    console.error('Ocorreu um erro durante o seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
