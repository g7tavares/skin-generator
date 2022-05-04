import { useTransactions } from "../../hooks/useTransactions";
import { Container, Content } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  var linkTitle = transactions.map((transaction) => transaction.title);
  var titleVerification = "" + linkTitle;
  var titleCode = 0;
  switch (titleVerification) {
    case "AK-47":
      titleCode = 7;
      break;
    case "AWP":
      titleCode = 9;
      break;
    case "M4A1-S":
      titleCode = 60;
      break;
    case "M4A4":
      titleCode = 16;
      break;
    case "SSG 08":
      titleCode = 40;
      break;
    case "SG 553":
      titleCode = 39;
      break;
    case "AUG":
      titleCode = 8;
      break;
    case "FAMAS":
      titleCode = 10;
      break;
    case "GALIL AR":
      titleCode = 13;
      break;
    case "G3SG1":
      titleCode = 11;
      break;
    case "SCAR-20":
      titleCode = 38;
      break;

    case "USP-S":
      titleCode = 61;
      break;
    case "GLOCK-18":
      titleCode = 4;
      break;
    case "DESERT EAGLE":
      titleCode = 1;
      break;
    case "P250":
      titleCode = 36;
      break;
    case "FIVE SEVEN":
      titleCode = 3;
      break;
    case "TEC-9":
      titleCode = 30;
      break;
    case "R8 REVOLVER":
      titleCode = 64;
      break;
    case "DUAL BERETTAS":
      titleCode = 2;
      break;
    case "CZ75-AUTO":
      titleCode = 63;
      break;
    case "P2000":
      titleCode = 32;
      break;

    case "MP9":
      titleCode = 34;
      break;
    case "MAC-10":
      titleCode = 17;
      break;
    case "MP7":
      titleCode = 33;
      break;
    case "MP5-SD":
      titleCode = 23;
      break;
    case "P90":
      titleCode = 19;
      break;
    case "UMP-45":
      titleCode = 24;
      break;
    case "PP-BIZON":
      titleCode = 26;
      break;

    case "MAG-7":
      titleCode = 27;
      break;
    case "NOVA":
      titleCode = 35;
      break;
    case "SAWED-OFF":
      titleCode = 29;
      break;
    case "XM1014":
      titleCode = 25;
      break;
    case "M249":
      titleCode = 14;
      break;
    case "NEGEV":
      titleCode = 28;
      break;
  }

  var linkSkin = transactions.map((transaction) => transaction.skin);
  var skinVerification = "" + linkSkin;
  var skinCode = 0;
  switch (skinVerification) {
    case "DOPPLER RUBY":
      skinCode = 415;
      break;
    case "DOPPLER SAPPHIRE":
      skinCode = 619;
      break;
    case "GAMMA DOPPLER EMERALD":
      skinCode = 568;
      break;
    case "ABYSS":
      skinCode = 361;
      break;
    case "ACID ETCHED":
      skinCode = 951;
      break;
    case "AMBER FADE":
      skinCode = 246;
      break;
    case "ASTRAL JÖRMUNGANDR":
      skinCode = 759;
      break;
    case "BAROQUE ORANGE":
      skinCode = 746;
      break;
    case "BAROQUE PURPLE":
      skinCode = 745;
      break;
    case "BAROQUE RED":
      skinCode = 744;
      break;
    case "BLUE PHOSPHOR":
      skinCode = 1017;
      break;
    case "BOOM":
      skinCode = 174;
      break;
    case "BRASS":
      skinCode = 159;
      break;
    case "BULLDOZER":
      skinCode = 39;
      break;
    case "CANDY APPLE":
      skinCode = 3;
      break;
    case "CARAMEL":
      skinCode = 93;
      break;
    case "CARBON FIBER":
      skinCode = 70;
      break;
    case "CASE HARDENED":
      skinCode = 44;
      break;
    case "CHEMICAL GREEN":
      skinCode = 376;
      break;
    case "COBALT DISRUPTION":
      skinCode = 231;
      break;
    case "COBALT QUARTZ":
      skinCode = 249;
      break;
    case "COPPER GALAXY":
      skinCode = 274;
      break;
    case "CORE BREACH":
      skinCode = 787;
      break;
    case "COUNTER TERRACE":
      skinCode = 462;
      break;
    case "CRIMSON WEB":
      skinCode = 232;
      break;
    case "DEATH BY KITTY":
      skinCode = 156;
      break;
    case "DEATH BY PUPPY":
      skinCode = 913;
      break;
    case "DEATH GRIP":
      skinCode = 669;
      break;
    case "DEMOLITION":
      skinCode = 153;
      break;
    case "ELETRIC HIVE":
      skinCode = 227;
      break;
    case "EMERALD":
      skinCode = 453;
      break;
    case "EMERALD JÖRMUNGANDR":
      skinCode = 757;
      break;
    case "EXO":
      skinCode = 590;
      break;
    case "FADE":
      skinCode = 1026;
      break;
    case "THE FUCHIA IS NOW":
      skinCode = 269;
      break;
    case "GOLD BRICK":
      skinCode = 1025;
      break;
    case "GRAPHITE":
      skinCode = 212;
      break;
    case "GREEN APPLE":
      skinCode = 294;
      break;
    case "HADES":
      skinCode = 439;
      break;
    case "HAZARD":
      skinCode = 198;
      break;
    case "HEMOGLOBIN":
      skinCode = 220;
      break;
    case "HOT ROD":
      skinCode = 33;
      break;
    case "HYPNOTIC":
      skinCode = 61;
      break;
    case "IMPIRE":
      skinCode = 536;
      break;
    case "INDIGO":
      skinCode = 333;
      break;
    case "LAB RAT":
      skinCode = 800;
      break;
    case "MIDNIGHT STORM":
      skinCode = 468;
      break;
    case "MINOTAUR'S LABYRINTH":
      skinCode = 441;
      break;
    case "NITRO":
      skinCode = 254;
      break;
    case "NUCLEAR GARDEN":
      skinCode = 372;
      break;
    case "PANDORA'S BOX":
      skinCode = 448;
      break;
    case "PANTHER":
      skinCode = 276;
      break;
    case "PAW":
      skinCode = 718;
      break;
    case "PRISM TERRACE":
      skinCode = 1072;
      break;
    case "RED FILIGREE":
      skinCode = 742;
      break;
    case "RED QUARTZ":
      skinCode = 248;
      break;
    case "SAFETY NET":
      skinCode = 795;
      break;
    case "SEABIRD":
      skinCode = 873;
      break;
    case "SILVER":
      skinCode = 32;
      break;
    case "STAINED GLASS":
      skinCode = 867;
      break;
    case "SUNSET STORM 壱":
      skinCode = 469;
      break;
    case "SUNSET STORM 弐":
      skinCode = 470;
      break;
    case "SUPERNOVA":
      skinCode = 358;
      break;
    case "TARGET ACQUIRED":
      skinCode = 1027;
      break;
    case "TUXEDO":
      skinCode = 297;
      break;
    case "ULTRAVIOLET":
      skinCode = 98;
      break;
    case "WHITEOUT":
      skinCode = 102;
      break;
    case "ZOMBIE OFFENSIVE":
      skinCode = 1135;
      break;
  }

  var linkFloat = transactions.map((transaction) => transaction.float);
  var floatCode = "" + linkFloat;

  var linkPattern = transactions.map((transaction) => transaction.pattern);
  var patternCode = "" + linkPattern;

  var link =
    "!gen " +
    titleCode +
    " " +
    skinCode +
    " " +
    patternCode +
    " " +
    floatCode +
    " 0 0 0 0 0 0 0 0";

  return (
    <Container>
      <Content>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <h3>
              {transaction.title} {transaction.skin}, Float: {transaction.float}
              , Pattern: {transaction.pattern}
            </h3>
          </div>
        ))}
        <div>
          <p>{link}</p>
        </div>
      </Content>
    </Container>
  );
}
