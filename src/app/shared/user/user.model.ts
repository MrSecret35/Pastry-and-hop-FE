export class PastryModel {
  public idPastry: number;
  public  name: string;
  public address: string;
}

export class Pastry {
  constructor(
    public idPastry: number,
    public name: string,
    public address: string,
  ) {}

}
