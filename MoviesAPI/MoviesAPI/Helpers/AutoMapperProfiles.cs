using AutoMapper;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;

namespace MoviesAPI.Helpers {

  public class AutoMapperProfiles : Profile {

    public AutoMapperProfiles() {

      CreateMap<GenreDTO, Actor>().ReverseMap();
      CreateMap<GenreCreationDTO, Actor>();

      CreateMap<ActorDTO, Actor>().ReverseMap();
      CreateMap<ActorCreationDTO, Actor>().ForMember(x => x.Picture, options => options.Ignore());

    }
  }
}
