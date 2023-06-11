using MoviesAPI.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Services {
  public interface IRepository {

    Task<List<Genre>> GetAllGenres();
    Genre GetGenreById(int Id);
  }
}
