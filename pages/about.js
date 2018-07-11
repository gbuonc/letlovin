import Layout from '../components/Layout';
import Overdrive from 'react-overdrive'
import Link from 'next/link';



const about = (props) => {
   console.log(props);
   return (
      <Layout title="About">
         <div style={{'display':'flex', 'justifyContent':'space-between'}}>
            <Overdrive id='a' style={{'display':'inline-block'}} >
               <div style={{'display':'inline-block', 'width':'300px', 'height':'100px', 'background':'pink'}}>A</div>
            </Overdrive>
            <Overdrive id='b' style={{'display':'inline-block'}} >
               <div style={{'display':'inline-block', 'width':'300px', 'height':'100px', 'background':'green'}}>B</div>
            </Overdrive>
         </div>
      </Layout>
   );
};

export default about;

