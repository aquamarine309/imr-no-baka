const SCALE_START = {
    super: {
        rank: E(50),
		tier: E(10),
		tetr: E(7),
		pent: E(15),
		hex: E(10),
        massUpg: E(100),
		tickspeed: E(100),
		bh_condenser: E(100),
		gamma_ray: E(100),
		supernova: E(15),
		fTier: E(10),
		cosmic_str: E(15),
		prestige0: E(15),
		prestige1: E(7),
		prestige2: E(30),
		prestige3: E(8),
		prestige4: E(10),
		massUpg4: E(50),
		FSS: E(5),
		fvm: E(1e11),
		pe: E(25),
		inf_theorem: E(10),
		ascension0: E(20),
		ascension1: E(10),
		gal_prestige: E(10),
    },
	hyper: {
		rank: E(120),
		tier: E(200),
		tetr: E(60),
		pent: E(60),
		hex: E(60),
		massUpg: E(500),
		tickspeed: E(250),
		bh_condenser: E(300),
		gamma_ray: E(300),
		supernova: E(35),
		fTier: E(50),
		cosmic_str: E(90),
		prestige0: E(80),
		prestige1: E(60),
		prestige2: E(60),
		prestige3: E(55),
		massUpg4: E(250),
		FSS: E(32),
	},
	ultra: {
		rank: E(600),
		tier: E(1e5),
		tetr: E(150),
		pent: E(1200),
		hex: E(2e12),
		massUpg: E(1e11),
		tickspeed: E(700),
		bh_condenser: E(750),
		gamma_ray: E(800),
		supernova: E(60),
		fTier: E(100),
		prestige0: E(320),
		prestige1: E(200),
	},
	meta: {
		rank: E(1e4),
		tier: E(1e9),
		tetr: E(1e10),
		tickspeed: E(5e4),
		bh_condenser: E(1e7),
		gamma_ray: E(1e6),
		supernova: E(100),
		fTier: E(1.25e4),
		prestige0: E(3500),
	},
	exotic: {
		rank: E(1e16),
		tier: E(1e25),
		supernova: E(2e5),
	},
	supercritical: {
		rank: E(1e37),
		supernova: E(1e7),
	},
	instant: {
		rank: E('e400'),
		fvm: E(1e25),
	},
	mega: {
		
	},
}

const SCALE_POWER= {
    super: {
		rank: 1.5,
		tier: 1.5,
		tetr: 2,
		pent: 2,
		hex: 2.5,
		massUpg: 2.5,
		tickspeed: 2,
		bh_condenser: 2,
		gamma_ray: 2,
		supernova: 3,
		fTier: 2.5,
		cosmic_str: 2,
		prestige0: 1.5,
		prestige1: 1.5,
		prestige2: 2,
		prestige3: 2,
		prestige4: 2.5,
		massUpg4: 3,
		FSS: 2,
		fvm: 10,
		pe: 2,
		inf_theorem: 2,
		ascension0: 2,
		ascension1: 2,
		gal_prestige: 2,
    },
	hyper: {
		rank: 2.5,
		tier: 2.5,
		tetr: 3,
		pent: 3,
		hex: 3.5,
		massUpg: 5,
		tickspeed: 4,
		bh_condenser: 2,
		gamma_ray: 4,
		supernova: 3,
		fTier: 4,
		cosmic_str: 4,
		prestige0: 2,
		prestige1: 2,
		prestige2: 3,
		prestige3: 3,
		massUpg4: 8,
		FSS: 3,
	},
	ultra: {
		rank: 4,
		tier: 4,
		tetr: 6,
		pent: 6,
		hex: 8,
		massUpg: 10,
		tickspeed: 7,
		bh_condenser: 4,
		gamma_ray: 6,
		supernova: 5,
		fTier: 6,
		prestige0: 3,
		prestige1: 3,
	},
	meta: {
		rank: 1.0025,
		tier: 1.0000001,
		tetr: 1.00000001,
		tickspeed: 1.001,
		bh_condenser: 1.001,
		gamma_ray: 1.001,
		supernova: 1.025,
		fTier: 1.001,
		prestige0: 1.0025,
	},
	exotic: {
		rank: 15,
		tier: 20,
		supernova: 20,
	},
	supercritical: {
		rank: 50,
		supernova: 75,
	},
	instant: {
		rank: 3,
		fvm: 10,
	},
	mega: {

	},
}

const SCALE_FP = {
	tickspeed() { return [1,1,1,tmp.tickspeedFP] },
}

const QCM8_SCALES = ['rank','tier','tetr','pent','hex','massUpg','tickspeed','bh_condenser','gamma_ray','supernova','fTier']
const PreQ_SCALES = ['rank','tier','tetr','massUpg','tickspeed','bh_condenser','gamma_ray']
const SCALE_TYPE = ['super', 'hyper', 'ultra', 'meta', 'exotic', 'supercritical', 'instant', 'mega'] // super, hyper, ultra, meta, exotic
const FULL_SCALE_NAME = ['Super', 'Hyper', 'Ultra', 'Meta', 'Exotic', 'Supercritical', 'Instant', 'Mega']

const SCALING_RES = {
    rank(x=0) { return player.ranks.rank },
	tier(x=0) { return player.ranks.tier },
	tetr(x=0) { return player.ranks.tetr },
	pent(x=0) { return player.ranks.pent },
	hex(x=0) { return player.ranks.hex },
	tickspeed(x=0) { return player.build.tickspeed.amt },
    massUpg(x=1) { return player.build["mass_"+(x+1)].amt },
	bh_condenser(x=0) { return player.build.bhc.amt },
	gamma_ray(x=0) { return player.build.cosmic_ray.amt },
	supernova(x=0) { return player.supernova.times },
	fTier(x=0, y=0) { return player.supernova.fermions.tiers[x][y] },
	cosmic_str(x=0) { return player.build.cosmic_string.amt },
	prestige0() { return player.prestiges[0] },
	prestige1() { return player.prestiges[1] },
	prestige2() { return player.prestiges[2] },
	prestige3() { return player.prestiges[3] },
	prestige4() { return player.prestiges[4] },
	massUpg4() { return player.build.mass_4.amt },
	FSS() { return player.dark.matters.final },
	fvm() { return player.build.fvm.amt },
	pe() { return player.build.pe.amt },
	inf_theorem() { return player.inf.theorem },
	ascension0() { return player.ascensions[0] },
	ascension1() { return player.ascensions[1] },
	gal_prestige() { return player.gal_prestige },
}

const NAME_FROM_RES = {
	rank: "Rank",
	tier: "Tier",
	tetr: "Tetr",
	pent: "Pent",
	hex: "Hex",
	massUpg: "Mass Upgrades 1-3",
	tickspeed: "Tickspeed",
	bh_condenser: "Black Hole Condenser",
	gamma_ray: "Cosmic Ray",
	supernova: "Supernova",
	fTier: "Fermion Tier",
	cosmic_str: "Cosmic String",
	prestige0: "Prestige Level",
	prestige1: "Honor",
	prestige2: "Glory",
	prestige3: "Renown",
	prestige4: "Valor",
	massUpg4: "Overpower",
	FSS: "Final Star Shard",
	fvm: "False Vacuum Manipulator",
	pe: "Parallel Extruder",
	inf_theorem: "Infinity Theorem",
	ascension0: "Ascension",
	ascension1: "Transcension",
	gal_prestige: "Galactic Prestige",
}

const C18_SCALING = [
	'rank','tier','tetr','pent','hex','massUpg','tickspeed','bh_condenser','gamma_ray','supernova','fTier',
	'cosmic_str','prestige0','prestige1','prestige2','prestige3','massUpg4','FSS','fvm'
]

function updateScalingHTML() {
	let s = SCALE_TYPE[player.scaling_ch]
	// tmp.el.scaling_name.setTxt(FULL_SCALE_NAME[player.scaling_ch])
	if (!tmp.scaling) return
	for (let x = 0; x < SCALE_TYPE.length; x++) {
		let type = SCALE_TYPE[x]
		tmp.el["scaling_div_"+x].setDisplay(player.scaling_ch == x)
		if (player.scaling_ch == x) {
			for (let key in SCALE_START[type]) {
				let have = tmp.scaling[type].includes(key)
				tmp.el['scaling_'+x+'_'+key+'_div'].setDisplay(have)
				if (have) {
					let p = tmp.scaling_power[type][key], q = Decimal.pow(SCALE_POWER[type][key],p)
					tmp.el['scaling_'+x+'_'+key+'_power'].setTxt(format(p.mul(100))+"%, "+(x%4==3?q.format()+"^":"^"+q.format()+(x>=6?" to exponent":"")))
					tmp.el['scaling_'+x+'_'+key+'_start'].setTxt(format(tmp.scaling_start[type][key],0))
				}
			}
		}
	}
}

function updateScalingTemp() {
	for (let x = 0; x < SCALE_TYPE.length; x++) {
		let st = SCALE_TYPE[x]

		tmp.scaling[st] = []
		tmp.no_scalings[st] = []

		let sp = tmp.scaling_power[st], ss = tmp.scaling_start[st], ns = tmp.no_scalings[st]
		let key = Object.keys(SCALE_START[st])

		for (let y = 0; y < key.length; y++) {
			let sn = key[y]

			sp[sn] = getScalingPower(x,sn)
			ss[sn] = getScalingStart(x,sn)
			if (noScalings(x,sn)) ns.push(sn)
			else {
				if (sn == "massUpg") for (let i = 0; i < 3; i++) {
					if (scalingActive(sn, SCALING_RES[sn](i), st)) {
						tmp.scaling[st].push(sn)
						break
					}
				}
				else if (sn == "fTier") for (let i = 0; i < 2; i++) for (let j = 0; j < 6; j++) {
					if (scalingActive(sn, SCALING_RES[sn](i,j), st)) {
						tmp.scaling[st].push(sn)
						break
					}
				}
				else if (scalingActive(sn, SCALING_RES[sn](), st)) tmp.scaling[st].push(sn)
			}
		}
	}
	let sqc8 = []
	if (!CHALS.inChal(14) && !inDarkRun() && !tmp.c16active && !CHALS.inChal(15)) {
		if (player.mainUpg.br.includes(2)) sqc8.push("massUpg","rank","tier","tetr","pent",'hex')
		if (player.md.break.active) sqc8.push("bh_condenser","gamma_ray")
	}
	tmp.scaling_qc8 = sqc8
}

function scalingActive(name, amt, type) {
	if (tmp.no_scalings[type].includes(name) || SCALE_START[type][name] === undefined) return false
	return Decimal.gte(amt, tmp.scaling_start[type][name]);
}

function scaleStart(type,name) { return tmp.scaling_start[type][name]||SCALE_START[type][name] }

function getScalingName(name, x=0, y=0) {
	if (!NAME_FROM_RES[name]) return ''

	let cap = Object.keys(SCALE_START).length;
	let current = "";
	let amt = SCALING_RES[name](x,y);
	for (let n = cap - 1; n >= 0; n--) {
		if (scalingActive(name, amt, Object.keys(SCALE_START)[n]))
			return capitalFirst(Object.keys(SCALE_START)[n]) + (n%4==3?"-":" ");
	}
	return current;
}

function getScalingStart(type, name) {
  return E("1f308");
}

function getScalingPower(type, name) {
	return E(1);
}

function noScalings(type,name) {
  return true;
	if (tmp.c18active && C18_SCALING.includes(name)) return false

	if (name=="rank") {
		if (type<4 && hasPrestige(1,127)) return true
		else if (type == 4 && hasAscension(0,15)) return true
	}
	else if (name=="tier") {
		if (type<4 && hasPrestige(1,127)) return true
		else if (type == 4 && hasAscension(0,15)) return true
	}
	else if (name=="tetr") {
		return hasCharger(8)
	}
	else if (name=="pent") {
		return hasElement(243)
	}
	else if (name=="hex") {
		if (type<2 && hasAscension(0,15)) return true
	}
	else if (name=="massUpg") {
		if (hasBeyondRank(2,15)) return true
	}
	else if (name=="supernova") {
		return tmp.SN_passive || type<3 && hasCharger(3)
	}
	else if (name=="tickspeed") {
		if (hasCharger(4)) return true
	}
	else if (name=="fTier") {
		if (type < 3 && hasElement(2,1)) return true
	}
	else if (name=="bh_condenser") {
		if (hasCharger(6)) return true
	}
	else if (name=="gamma_ray") {
		if (hasCharger(7)) return true
	}
	else if (name=="prestige0") {
		if (type < 3 && hasBeyondRank(5,7)) return true
	}
	else if (name=="prestige1" || name=="prestige2") {
		if (type < 3 && hasBeyondRank(11,1)) return true
	}

	return false
}