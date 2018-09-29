import { ProduitService } from "./produit.service";
import { TestBed } from "@angular/core/testing";

describe("ProduitService", () => {

  let service: ProduitService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProduitService
      ]
    });
    service = TestBed.get(ProduitService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
