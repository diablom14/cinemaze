function CastIcon({
    profile="",
    name=""
})
{
    return (
        <div className="flex flex-col gap-2 w-24">
            <div className="mt-5">
                <img className="h-24 w-24 rounded-full object-cover" src={profile} alt="Profile Icon" />
            </div>
            <span className="text-center">{name}</span>
        </div>
    );
}

export default CastIcon;