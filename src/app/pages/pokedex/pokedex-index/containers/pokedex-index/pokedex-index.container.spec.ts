import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexIndexContainer } from './pokedex-index.container';

describe('PokedexIndexContainer', () => {
  let component: PokedexIndexContainer;
  let fixture: ComponentFixture<PokedexIndexContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexIndexContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexIndexContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
