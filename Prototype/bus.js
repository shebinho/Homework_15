	function Bus(passengers, color,conductor,seats,priceTicket)
	{
		this.passengers = passengers || 52;
		this.color = color || 'Yellow';
		this.conductor = conductor || false;
		this.seats = seats || 52;
		this.priceTicket = priceTicket;
		this.isMoving = false;
		this.isWorking = false;	
		this.isDamaged = false;	
	}


	function DracevoBus(passengers, color,conductor,seats,priceTicket,linenumber)
	{
		this._super(passengers, color,conductor,seats,priceTicket);
		this.linenumber = linenumber || parseFloat(Math.random() * 100).toFixed(0);
		this.isMoving = true;
		this.isDamaged = false;
		this.isWorking = true;
		
	}

	

	DracevoBus.prototype = Object.create(Bus.prototype);
	DracevoBus.prototype.constructor = AerodromBus;
	DracevoBus.prototype._super = Bus;

	function AerodromBus(passengers, color,conductor,seats,priceTicket,linenumber)
	{
		this._super(passengers, color,conductor,seats,priceTicket);
		this.linenumber = linenumber || parseFloat(Math.random() * 100).toFixed(0);
		this.isMoving = false;
		this.isDamaged = true;
		this.isWorking = false;
		
	}

	AerodromBus.prototype = Object.create(Bus.prototype);
	AerodromBus.prototype.constructor = AerodromBus;
	AerodromBus.prototype._super = Bus;

	Bus.prototype.checkSeats = function(){
		let busCheck = this.seats - this.passengers;
		return busCheck === 0 ? "The buss is full" : "You have "+busCheck+" seats available";

	}
	Bus.prototype.checkForMoney = function(){
		let collectMoney = this.priceTicket * this.passengers;
		return (this.conductor) ?  "You\'ve collected "+collectMoney+" denars" : "Gaga vozenje udrii";
	}
	Bus.prototype.busStatus = function(){
		return (this.isDamaged)? "The bus is damaged " : "The bus is not damaged";
	}
	
	Bus.prototype.getIsMoving = function()
	{
		return (this.isMoving)?"The bus is moving": "The bus is not moving" 
	}
	
	Bus.prototype.getIsWorking = function()
	{
		return (this.isMoving === true && this.isDamaged === false) ? "The bus is working" : "The bus is not moving and it's damaged";
	}

	Bus.prototype.getInfo = function()
	{
		return this;
	}

	let bus1 = new DracevoBus(31, 'red', false,36,35);
	let bus2 = new AerodromBus(51, 'red', true,51,35);
	console.log (bus1.getInfo());
	console.log(bus2.getInfo());
	console.log(bus1.checkSeats());
	console.log(bus2.checkSeats());
	console.log(bus1.checkForMoney());
	console.log(bus2.checkForMoney());
	console.log(bus1.busStatus());
	console.log(bus2.busStatus());
	console.log(bus1.getIsMoving());
	console.log(bus2.getIsMoving());
	console.log(bus1.getIsWorking());
	console.log(bus2.getIsWorking());
	console.log(bus1.getInfo());
	console.log(bus2.getInfo());
	
	/*
	For homework :
	
	Extend this example , allow the bus to be able to start running, to be able to move,
	add seat counter (busy / free), conductor, number of tiers, is broken / damaged...

	*/
