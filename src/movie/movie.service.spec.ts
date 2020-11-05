import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';

describe('Unit test', () => {
  let provider: MovieService;
  let createData = {
    title : "영화"
    ,year : 20201105
  };
  let updateData = {
      "title" : "업데이트"
    , "years" : 20201105
  };    
  let compare;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();
    provider = module.get<MovieService>(MovieService);    
  });  

  it('STEP 1 : should be defined - provider', () => {
      expect(provider).toBeDefined();
  });   

  describe("create",()=>{
    it('create',()=>{       
        provider.crateMovie(createData);
        compare = {...provider.getOne(1),...updateData};
        expect(provider.getOne(1)).toMatchObject({"id":1,...createData});
    });
  });

  describe('getOne',()=>{
    it("getOne",()=>{
      provider.crateMovie(createData);
      expect(provider.getOne(1)).toBeDefined();
    });
  });
  describe('getAll',()=>{
    it("-getAll() : Array",()=>{
      provider.crateMovie(createData);
      const result = provider.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('after update',()=>{
    it("-after update",()=>{
      provider.crateMovie(createData);
      provider.update(1,updateData);
      expect(provider.getOne(1)).toEqual(compare);
    });
  });
  describe('deleteMovie',()=>{
    it("-deleteMovie(number) : void",()=>{                
      provider.crateMovie(createData);  
      const size = provider.getAll().length;
      provider.deleteOne(1);      
      expect(provider.getAll().length).toEqual(size-1);
    });
  });
  describe('exception Check',()=>{ 
    it("-exception Check : NotFoundException",()=>{
      try{
        provider.getOne(1);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});

