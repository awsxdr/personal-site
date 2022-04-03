import Lineup1Image from './Lineup1.jpg';
import Lineup2Image from './Lineup2.jpg';
import Lineup3Image from './Lineup3.jpg';
import Lineup4Image from './Lineup4.jpg';
import Lineup5Image from './Lineup5.jpg';
import Lineup6Image from './Lineup6.jpg';
import PenaltyBox1Image from './PenaltyBox1.jpg';
import PenaltyBox2Image from './PenaltyBox2.jpg';
import PenaltyBox3Image from './PenaltyBox3.jpg';
import PenaltyBox4Image from './PenaltyBox4.jpg';
import PenaltyLineup1Image from './PenaltyLineup1.jpg';
import PenaltyLineup2Image from './PenaltyLineup2.jpg';
import PenaltyLineup3Image from './PenaltyLineup3.jpg';
import PenaltyLineup4Image from './PenaltyLineup4.jpg';
import PenaltyLineup5Image from './PenaltyLineup5.jpg';
import Score1Image from './Score1.jpg';
import Score3Image from './Score3.jpg';
import Score4Image from './Score4.jpg';
import Score11Image from './Score11.jpg';
import Score12Image from './Score12.jpg';
import Scoreboard1Image from './Scoreboard1.jpg';
import Scoreboard2Image from './Scoreboard2.jpg';
import Scoreboard3Image from './Scoreboard3.jpg';
import Scoreboard4Image from './Scoreboard4.jpg';
import Scoreboard5Image from './Scoreboard5.jpg';
import Scoreboard6Image from './Scoreboard6.jpg';
import Tracker1Image from './Tracker1.jpg';
import Tracker2Image from './Tracker2.jpg';
import Tracker3Image from './Tracker3.jpg';
import Whiteboard1Image from './Whiteboard1.jpg';
import Whiteboard2Image from './Whiteboard2.jpg';
import Wrangler1Image from './Wrangler1.jpg';
import Wrangler2Image from './Wrangler2.jpg';
import PdfLogoImage from './PdfLogo.png';

const Image = (source) => (
    <img src={source} style={{ maxWidth: '100%', display: 'block' }} />
);

const LinkImage = (source) => (
    <img src={source} style={{ height: '2em' }} />
)

export const Lineup1 = () => Image(Lineup1Image);
export const Lineup2 = () => Image(Lineup2Image);
export const Lineup3 = () => Image(Lineup3Image);
export const Lineup4 = () => Image(Lineup4Image);
export const Lineup5 = () => Image(Lineup5Image);
export const Lineup6 = () => Image(Lineup6Image);
export const PenaltyBox1 = () => Image(PenaltyBox1Image);
export const PenaltyBox2 = () => Image(PenaltyBox2Image);
export const PenaltyBox3 = () => Image(PenaltyBox3Image);
export const PenaltyBox4 = () => Image(PenaltyBox4Image);
export const PenaltyLineup1 = () => Image(PenaltyLineup1Image);
export const PenaltyLineup2 = () => Image(PenaltyLineup2Image);
export const PenaltyLineup3 = () => Image(PenaltyLineup3Image);
export const PenaltyLineup4 = () => Image(PenaltyLineup4Image);
export const PenaltyLineup5 = () => Image(PenaltyLineup5Image);
export const Score1 = () => Image(Score1Image);
export const Score3 = () => Image(Score3Image);
export const Score4 = () => Image(Score4Image);
export const Score11 = () => Image(Score11Image);
export const Score12 = () => Image(Score12Image);
export const Scoreboard1 = () => Image(Scoreboard1Image);
export const Scoreboard2 = () => Image(Scoreboard2Image);
export const Scoreboard3 = () => Image(Scoreboard3Image);
export const Scoreboard4 = () => Image(Scoreboard4Image);
export const Scoreboard5 = () => Image(Scoreboard5Image);
export const Scoreboard6 = () => Image(Scoreboard6Image);
export const Tracker1 = () => Image(Tracker1Image);
export const Tracker2 = () => Image(Tracker2Image);
export const Tracker3 = () => Image(Tracker3Image);
export const Whiteboard1 = () => Image(Whiteboard1Image);
export const Whiteboard2 = () => Image(Whiteboard2Image);
export const Wrangler1 = () => Image(Wrangler1Image);
export const Wrangler2 = () => Image(Wrangler2Image);
export const PdfLogo = () => LinkImage(PdfLogoImage);