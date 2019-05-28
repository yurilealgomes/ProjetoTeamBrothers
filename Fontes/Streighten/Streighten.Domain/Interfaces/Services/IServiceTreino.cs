using Streighten.Domain.Arguments.Treino;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streighten.Domain.Interfaces.Services
{
    public interface IServiceTreino
    {
        AdicionarTreinoResponse AdicionarTreino(AdicionarTreinoRequest request);
    }
}
