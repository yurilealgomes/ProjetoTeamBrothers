using Streighten.Domain.Arguments.Treino;
using Streighten.Domain.Services;
using System;

namespace StreightenConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            AdicionarTreinoRequest request = new AdicionarTreinoRequest()
            {
                Nome = "Abdominais",
                Descricao = "Deite de costas com os joelhos dobrados e os braços esticados para frente." +
                    "Levante a parte superior do corpo tirando-a do chão. Mantenha-a erguida por alguns segundos e retorne lentamente.",
                UrlVideo = "https://www.youtube.com/watch?v=zOZr-pXgawk",
                Status = Streighten.Domain.Enums.EnumStatus.Ativo,
                Dificuldade = Streighten.Domain.Enums.EnumDificuldade.Iniciante

            };

            var response = new ServiceTreino().AdicionarTreino(request);

            Console.ReadKey();
        }
    }
}
