import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, Content1, Header } from "./styles";

interface TesteProps {
  onRequestClose: () => void;
}

export function Teste({ onRequestClose }: TesteProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [skin, setSkin] = useState("");
  const [float, setFloat] = useState(0.01);
  const [pattern, setPattern] = useState(661);
  const [link, setLink] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ title, skin, float, pattern, link });
    setTitle("");
    setSkin("");
    setFloat(0.01);
    setPattern(661);
    setLink("");
    onRequestClose();
  }

  return (
    <Container onSubmit={handleCreateNewTransaction}>
      <Header className="row">
        <p className="col-4">Weapon:</p>
        <p className="col-4">Skin:</p>
        <p className="col-2">
          Float: <span>(0 - 1)</span>{" "}
        </p>
        <p className="col-2">
          Pattern: <span>(1 - 999)</span>{" "}
        </p>
      </Header>
      <Content1 className="row">
        <div className="col-4">
          <select
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          >
            <option>Select a weapon</option>
            <option disabled>RIFLES</option>
            <option>AK-47</option>
            <option>M4A1-S</option>
            <option>M4A4</option>
            <option>AWP</option>
            <option>SSG 08</option>
            <option>SG 553</option>
            <option>AUG</option>
            <option>FAMAS</option>
            <option>GALIL AR</option>
            <option>G3SG1</option>
            <option>SCAR-20</option>
            <option disabled>PISTOLS</option>
            <option>USP-S</option>
            <option>GLOCK-18</option>
            <option>P2000</option>
            <option>DESERT EAGLE</option>
            <option>P250</option>
            <option>FIVE SEVEN</option>
            <option>TEC-9</option>
            <option>R8 REVOLVER</option>
            <option>DUAL BERETTAS</option>
            <option>CZ75-AUTO</option>
            <option disabled>SMGS</option>
            <option>MP9</option>
            <option>MAC-10</option>
            <option>MP7</option>
            <option>MP5-SD</option>
            <option>P90</option>
            <option>UMP-45</option>
            <option>PP-BIZON</option>
            <option disabled>HEAVY</option>
            <option>MAG-7</option>
            <option>NOVA</option>
            <option>SAWED-OFF</option>
            <option>XM1014</option>
            <option>M249</option>
            <option>NEGEV</option>

          </select>
        </div>

        <div className="col-4">
          <select
            value={skin}
            onChange={(event) => setSkin(event.target.value)}
          >
            <option>Select a skin</option>
            <option disabled>──────────</option>
            <option>DOPPLER RUBY</option>
            <option>DOPPLER SAPPHIRE</option>
            <option>GAMMA DOPPLER EMERALD</option>
            <option disabled>──────────</option>
            <option>ABYSS</option>
            <option>ACID ETCHED</option>
            <option>AMBER FADE</option>
            <option>ASTRAL JÖRMUNGANDR</option>
            <option>BAROQUE ORANGE</option>
            <option>BAROQUE PURPLE</option>
            <option>BAROQUE RED</option>
            <option>BLUE PHOSPHOR</option>
            <option>BOOM</option>
            <option>BRASS</option>
            <option>BULLDOZER</option>
            <option>CANDY APPLE</option>
            <option>CARAMEL</option>
            <option>CARBON FIBER</option>
            <option>CASE HARDENED</option>
            <option>CHEMICAL GREEN</option>
            <option>COBALT DISRUPTION</option>
            <option>COBALT QUARTZ</option>
            <option>COPPER GALAXY</option>
            <option>CORE BREACH</option>
            <option>COUNTER TERRACE</option>
            <option>CRIMSON WEB</option>
            <option>DEATH BY KITTY</option>
            <option>DEATH BY PUPPY</option>
            <option>DEATH GRIP</option>
            <option>DEMOLITION</option>
            <option>ELETRIC HIVE</option>
            <option>EMERALD</option>
            <option>EMERALD JÖRMUNGANDR</option>
            <option>EXO</option>
            <option>FADE</option>
            <option>FRANKLIN</option>
            <option>THE FUCHIA IS NOW</option>
            <option>GOLD BRICK</option>
            <option>GRAPHITE</option>
            <option>GREEN APPLE</option>
            <option>HADES</option>
            <option>HAZARD</option>
            <option>HEMOGLOBIN</option>
            <option>HOT ROD</option>
            <option>HYPNOTIC</option>
            <option>IMPIRE</option>
            <option>INDIGO</option>
            <option>LAB RAT</option>
            <option>MIDNIGHT STORM</option>
            <option>MINOTAUR'S LABYRINTH</option>
            <option>NITRO</option>
            <option>NUCLEAR GARDEN</option>
            <option>PANDORA'S BOX</option>
            <option>PANTHER</option>
            <option>PAW</option>
            <option>PRISM TERRACE</option>
            <option>RED FILIGREE</option>
            <option>RED QUARTZ</option>
            <option>SAFETY NET</option>
            <option>SEABIRD</option>
            <option>SILVER</option>
            <option>STAINED GLASS</option>
            <option>SUNSET STORM 壱</option>
            <option>SUNSET STORM 弐</option>
            <option>SUPERNOVA</option>
            <option>TARGET ACQUIRED</option>
            <option>TUXEDO</option>
            <option>ULTRAVIOLET</option>
            <option>WHITEOUT</option>
            <option>ZOMBIE OFFENSIVE</option>
          </select>
        </div>

        <div className="col-2">
          <input
            required
            placeholder="Float"
            value={float}
            onChange={(event) => setFloat(Number(event.target.value))}
            type="number"
          />
        </div>

        <div className="col-2">
          <input
            required
            placeholder="Pattern"
            value={pattern}
            onChange={(event) => setPattern(Number(event.target.value))}
            type="number"
          />
        </div>
      </Content1>
      <button type="submit">Cadastrar</button>
    </Container>
  );
}
