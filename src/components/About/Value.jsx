function Value({name, description}) {
    return (
      <div className="p-6">
        <div className="flex flex-col py-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex">
            <h2 className="text-lg italic pr-2">{description}</h2>
          </div>
        </div>
      </div>
    );
}

export default Value;
  