using System;
using System.Collections.Generic;
using System.Text;

namespace Streighten.Domain.Arguments.Treino
{
    public class AdicionarTreinoResponse
    {
        public AdicionarTreinoResponse(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }
    }
}
