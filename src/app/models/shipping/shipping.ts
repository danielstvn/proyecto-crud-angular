export class Shipping{
     id!: number;
	 id_client!: String;
	 logistic!: String;
	 type_product!: String;
	 quantity!: String;
	 register_date!: String;
	 delivery_date!: String;
	 cellar_delivery!: String;
	 price!: number;
	 id_transport!: String;
	 number_guide!: String;

	setDniClient(dniClient: String) {

		return this.id_client = dniClient;
	}

}


