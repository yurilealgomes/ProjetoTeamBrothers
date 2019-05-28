using System;
using System.Collections.Generic;
using System.Text;
using Streighten.Domain.Entities.Base;
using Streighten.Domain.Enums;

namespace Streighten.Domain.Entities
{
    public class Treino : EntityBase
    {
        public string Nome { get; set; } //Nome do Treino! 
        public string Descricao { get; set; } //Descrição do Treino!
        public string UrlVideo { get; set; } //Url do vídeo de demonstração no Youtube! 
        public EnumStatus Status { get; set; }
        public EnumDificuldade Dificuldade { get; set; }
    }
}
