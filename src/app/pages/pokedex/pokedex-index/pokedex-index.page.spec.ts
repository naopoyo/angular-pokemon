import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexIndexPage } from './pokedex-index.page';

describe('PokedexIndexPage', () => {
  let component: PokedexIndexPage;
  let fixture: ComponentFixture<PokedexIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexIndexPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
