import React from 'react';
import '../styles/globals.css';

const AcademicExperience = () => {
  return (
    <div class="bg-white">
      <table class="table-auto mx-auto border border-seperate border-slate-500 bg-white text-slate-700">
      <thead>
        <tr>
          <th class="border border-slate-300">
            <h4 className=" text-center">
              <span className="text-gradient border-style-one">
                Academic
              </span>{' '}
              Qualifications
            </h4>
          </th>
          <th class="border border-slate-300">
            Year Graduated
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 ..."> 
            NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
          </td>
          <td class="border border-slate-300 ...">May 2023</td>
        </tr>
        <tr>
          <td class="border border-slate-300 ...">B.S. from The University of Montevallo</td>
          <td class="border border-slate-300 ...">May 2013</td>
        </tr>
      </tbody>
    </table>
  </div>
    
    
    // <div className="card mx-auto pt-5 pb-5 bg-white text-stone-700">
    //   <div className="card-body d-flex align-items-center">
    //     <div className="col" style={{ zIndex: '2' }}>
    //       <div className="pb-2">
    //         <div className="grid grid-cols-2 gap-4 mb-4">
    //           <div>
    //             <h4 className=" text-center">
    //               <span className="text-gradient border-style-one">
    //                 Academic
    //               </span>{' '}
    //               Qualifications
    //             </h4>
    //             <ul className="text-center">
    //               <li className="pt-2  list-none text-sm">
    //                 NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
    //               </li>
    //               <small className=" text-xs">GRADUATED May 2023</small>
    //               <li className="pt-2  list-none">B.S. from The University of Montevallo</li>
    //               <small className=" text-xs">GRADUATED 2013</small>
    //             </ul>
    //           </div>
    //           <div>
    //             <h4 className=" text-center">
    //               <span className="text-gradient border-style-one">Job</span> Experience
    //             </h4>
    //             <ul className="text-center">
    //               <li className="pt-2  list-none">Crocodile Wine - Wine Sales Specialist</li>
    //               <small className=" text-xs">Current work</small>
    //               <li className="pt-2  list-none">
    //                 Windsor Boutique Hotel - Hotel Concierge
    //               </li>
    //               <small className=" text-xs">Current work</small>
    //               <li className="pt-2  list-none">Bottle Riot - Bartender</li>
    //               <small className=" text-xs">2017-2019</small>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AcademicExperience;
