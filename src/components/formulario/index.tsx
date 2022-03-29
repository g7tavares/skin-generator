import { Container, Content1, Content2, Header } from "./styles";

export function Formulario() {
  return (
    <Container>
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
          <select aria-label="SELECT A WEAPON">
            <option selected>AK47</option>
            <option>USP-S</option>
            <option>M4A1-S</option>
            <option>AWP</option>
          </select>
        </div>

        <div className="col-4">
          <select aria-label="SELECT A SKIN">
            <option selected>SLATE</option>
            <option>RUBY</option>
            <option>SAPPHIRE</option>
            <option>EMERALD</option>
          </select>
        </div>

        <div className="col-2">
          <input type="text" value="0.001" placeholder="0 - 1" />
        </div>

        <div className="col-2">
          <input type="text" value="661" placeholder="1 - 999" />
        </div>
      </Content1>
      <Content2 className="row">
        <div className="col-8 text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum debitis fuga veniam neque in. Officia, vero provident? Amet, maiores doloribus voluptate tenetur porro expedita. Facere a eveniet blanditiis laborum quo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores consectetur dolorem ratione doloremque eius ab nemo libero, neque, inventore vero eligendi eaque repellendus facere amet fugit expedita aspernatur omnis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores in deleniti totam eligendi libero eum minima ab odio ad, asperiores atque dolorum, facere sit saepe natus velit aspernatur exercitationem! Est?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur rerum sint consequuntur sunt! Eligendi aut tempore amet. Modi accusantium a quae deleniti explicabo consequatur possimus porro rerum iusto? Voluptate, quaerat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae sint facere dicta magni alias dolore laboriosam praesentium debitis architecto ea suscipit rerum aliquam nemo velit nulla, quas adipisci laudantium.
        </div>

        <div className="col-4">
          <p>
            Sticker: <span>(Slot 1)</span>{" "}
          </p>
          <select aria-label="SELECT A STICKER">
            <option selected>NO STICKER</option>
            <option>TITAN (HOLO)</option>
            <option>IBUYPOWER (HOLO)</option>
            <option>CROWN (FOIL)</option>
          </select>

          <p>
          Sticker: <span>(Slot 2)</span>{" "}
          </p>
          <select aria-label="SELECT A STICKER">
            <option selected>NO STICKER</option>
            <option>TITAN (HOLO)</option>
            <option>IBUYPOWER (HOLO)</option>
            <option>CROWN (FOIL)</option>
          </select>

          <p>
          Sticker: <span>(Slot 3)</span>{" "}
          </p>
          <select aria-label="SELECT A STICKER">
            <option selected>NO STICKER</option>
            <option>TITAN (HOLO)</option>
            <option>IBUYPOWER (HOLO)</option>
            <option>CROWN (FOIL)</option>
          </select>

          <p>
          Sticker: <span>(Slot 4)</span>{" "}
          </p>
          <select aria-label="SELECT A STICKER">
            <option selected>NO STICKER</option>
            <option>TITAN (HOLO)</option>
            <option>IBUYPOWER (HOLO)</option>
            <option>CROWN (FOIL)</option>
          </select>

          <button type="submit">GENERATE SKIN</button>
          <p>
          Chat Command: <span>(Copy)</span>{" "}
          </p>
          <input type="text" value="!gen 7 1035 661 0.001 0 0 0 0 0 0 0 0 "/>
        </div>
      </Content2>
    </Container>
  );
}
