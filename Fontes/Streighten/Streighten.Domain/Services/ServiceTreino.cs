using prmToolkit.NotificationPattern;
using Streighten.Domain.Arguments.Treino;
using Streighten.Domain.Entities;
using Streighten.Domain.Interfaces.Repositories;
using Streighten.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streighten.Domain.Services
{
    public class ServiceTreino : Notifiable, IServiceTreino
    {
        //Dependencias
        private readonly IRepositoryTreinos _repositoryTreinos;

        //Construtor 
        public ServiceTreino(IRepositoryTreinos repositoryTreinos)
        {
            _repositoryTreinos = repositoryTreinos;
        }

        public AdicionarTreinoResponse AdicionarTreino(AdicionarTreinoRequest request)
        {
            if (request == null)
            {
                AddNotification("AdicionarTreinoRequest", "Objeto AdicionarTreinoRequest é obrigatório!");
                return null;
            }

            //Alimentar os treinos! Através do request

            Treino treino = new Treino();
            treino.Nome = request.Nome;
            treino.Descricao = request.Descricao;
            treino.UrlVideo = request.UrlVideo;
            treino.Status = request.Status;
            treino.Dificuldade = request.Dificuldade;

            //Persistir os dados no banco
            _repositoryTreinos.Salvar(treino);

            //Return o Id do Treino
            return new AdicionarTreinoResponse(treino.Id);


        }
    }
}
