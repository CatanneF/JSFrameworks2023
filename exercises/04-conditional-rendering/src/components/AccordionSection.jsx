

const AccordionSection = (props) => {
    return (
        <div>
            <div class="title active">
        <i class="dropdown icon"></i>
        {props.title}
        </div>
        <div class="content active">
        <p class="transition visible">
            {props.paragraph}
        </p>
        </div>
        </div>
    )
}







export default AccordionSection;