const AccordionSection = (props) => {
//     return (
//         <div>
//             <div className={props.isOpen ? "title active" : "title"}>
//                 <i class="dropdown icon"></i>
//                 {props.title}
//             </div>
//             <div className={props.isOpen ? "content active" : "content"}>
//                 <p className={props.isOpen ? "transition visible" : "transition hidden"}>
//                     {props.paragraph}
//                 </p>
//             </div>
//         </div>
//     )
// };

return (
    <>
      <div className={props.isOpen ? "title active" : "title"}>
        <i className="dropdown icon"></i>
        {props.title}
      </div>
      <div className={props.isOpen ? "content active" : "content"}>
        <p
          className={props.isOpen ? "transition visible" : "transition hidden"}
        >
          {props.paragraph}
        </p>
      </div>
    </>
  );
};


export default AccordionSection;