class Pelicula {
  constructor(year, name) {
    this._year = year;
    this._name = name;
  }

  //id get & set
  get year() {
    return this._year;
  }
  set year(y) {
    this._year = y;
  }

  //tipo get & set
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }
}

export default Pelicula;
