import Card from '../card/Card'
import './Gallery.css'

/* Team Pics import */
import member1 from '../../static/team/photo1.png'
import member2 from '../../static/team/photo2.png'
import member3 from '../../static/team/photo3.png'
import member4 from '../../static/team/photo4.png'
import member5 from '../../static/team/photo5.png'
import member6 from '../../static/team/photo6.png'


const teamMembers = [
  {name: 'Bill Mahoney', position: 'Product Owner', picture: `${member1}`},
  {name: 'Sabana Cabrera', position: 'Art Director', picture: `${member2}`},
  {name: 'Shae Le', position: 'Tech Lead', picture: `${member3}`},
  {name: 'Skylah Lu', position: 'UX Designer', picture: `${member4}`},
  {name: 'Griff Richards', position: 'Developer', picture: `${member5}`},
  {name: 'Stan John', position: 'Developer', picture: `${member6}`},

]

export default function Gallery(){
    return (
        <>
        <div className="heading">
                <h1>The creative crew</h1>
            <div className="content">
                <h2>WHO ARE WE</h2>
                <p>We are a team of creatively diverse, driven, innovative individuals working in various locations from the world.</p>
            </div>
        </div>
        <div className='gallery'>
            {
                teamMembers.map((member) => <Card key={member.name} name={member.name} position={member.position} picture={member.picture} />)
            }
        </div>
        </>
    )
}