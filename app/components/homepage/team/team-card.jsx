// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { TeamData } from '@/utils/data/team-data';

function TeamCard({ member }) {

  return (
        
          TeamData.map((member)=>(
            <div key={member.id}>
              <Image
                src={member.profile}
                height={1280}
                width={1520}
                alt={member.name}
                className='member h-full w-full group-hover:scale-110 transition-all duration-300 hover:scale-110 border-full'
              />
            </div>
          ))
        

  );
};

export default TeamCard;