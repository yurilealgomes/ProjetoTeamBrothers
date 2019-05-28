using Streighten.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streighten.Domain.Arguments.Treino
{
    public class AdicionarTreinoRequest
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string UrlVideo { get; set; }
        public EnumStatus Status { get; set; }
        public EnumDificuldade Dificuldade { get; set; }
    }
}
