using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs {

  // Only used for querying database and sending data to front end
  public class GenreDTO {

    public int Id { get; set; }
    public string Name { get; set; }
  }
}
