type Props={
    text: string;
    onClick:()=>void;
    loading: boolean;
};

function Button({text ,onClick, loading}: Props){
return(
    <button type="button" onClick={onClick} className="">{loading=== true}{loading=== true ? "Loading...":text}</button>
)
}
export default Button;