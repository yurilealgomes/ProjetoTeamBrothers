using Streighten.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streighten.Domain.Interfaces.Repositories
{
    public interface IRepositoryTreinos
    {
        Treino Obter(string Nome);

        void Salvar(Treino treino);
        bool ExisteTreino(string Nome);
    }
}
