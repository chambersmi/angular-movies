using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers {

  [Route("api/genres")]
  [ApiController]
  public class GenresController : ControllerBase{

    private readonly IRepository repository;

    public GenresController(IRepository repository) {

      this.repository = repository;
    }

    [HttpGet]
    [HttpGet("list")]
    [HttpGet("/allgenres")]
    public async Task<ActionResult<List<Genre>>> Get() {
      return await repository.GetAllGenres();
    }

    [HttpGet("{Id:int}")]
    public ActionResult<Genre> Get(int Id, [FromBody] string param) {
      var genre = repository.GetGenreById(Id);
      
      if(genre == null) {
        return NotFound();
      }
      return genre;
    }

    [HttpPost]
    public ActionResult Post([FromBody] Genre genre) {
      return NoContent();
    }

    [HttpPut]
    public ActionResult Put([FromBody] Genre genre) {
      return NoContent();
    }

    [HttpDelete]
    public ActionResult Delete() {
      return NoContent();
    }
  }
}
