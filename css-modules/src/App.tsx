import AlbumGroup from './components/AlbumGroup/AlbumGroup.tsx';
import Album from './components/Album/Album.tsx';

function App() {

	return (
		<AlbumGroup>
			<Album title="Born to Run" artist="Bruce Springsteen" year="1975" label="CBS" image="/born-to-run.png"
			       color="#BFB0A3" link="#"/>
			<Album title="Come on Over" artist="Shania Twain" year="1997" label="Mercury" image="/come-on-over.png"
			       color="#BF1131" link="#"/>
			<Album title="Melodrama" artist="Lorde" year="2017" label="Universal" image="/melodrama.png"
			       color="#0455BF" link="#"/>
			<Album title="Jagged Little Pill" artist="Alanis Morissette" year="1995" label="Maverick"
			       image="/jagged-little-pill.png" color="#3A4E8C" link="#"/>
			<Album title="Breakdown" artist="Melissa Etheridge" year="1999" label="Island Records"
			       image="/breakdown.png" color="#73262C" link="#"/>
			<Album title="White Light" artist="The Corrs" year="2015" label="EastWest" image="/white-light.png"
			       color="#1B2459" link="#"/>
			<Album title="Love Sux" artist="Avril Lavigne" year="2022" label="DTA" image="/love-sux.png"
			       color="#BF0A0A" link="#"/>
			<Album title="The Truth About Love" artist="P!nk" year="2012" label="RCA" image="/truth-about-love.png"
			       color="#80BF90" link="#"/>
			<Album title="Cry Forever" artist="Amy Shark" year="2021" label="Wonderlick & Sony Music"
			       image="/cry-forever.png" color="#A1A1A6" link="#"/>
			<Album title="Lover" artist="Taylor Swift" year="2019" label="Republic Records" image="/lover.png"
			       color="#F2A2CE" link="#"/>
			<Album title="Circus Animals" artist="Cold Chisel" year="1982" label="WEA" image="/circus-animals.png"
			       color="#204F8C" link="#"/>
			<Album title="Waiting For The Day" artist="Bachelor Girl" year="1998" label="Gotham"
			       image="/waiting-for-the-day.png" color="#D99B29" link="#"/>
			<Album title="Woodface" artist="Crowded House" year="1991" label="Capitol Records"
			       image="/woodface.png" color="#8C2C16" link="#"/>
			<Album title="Storm & Grace" artist="Lisa Marie Presley" year="2012" label="Universal Republic"
			       image="/storm-and-grace.png" color="#A58FA6" link="#"/>
			<Album title="Rumours" artist="Fleetwood Mac" year="1977" label="Warner Bros"
			       image="/rumours.png" color="#3A3A40" link="#"/>
		</AlbumGroup>
	);
}

export default App;
