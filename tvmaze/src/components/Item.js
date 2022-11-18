const Item = ({ data, category }) => {
  switch (category) {
    case "people":
      return (
        <div className="grid grid-cols-4 gap-4 justify-center mx-10 p-6 min-w-[1/4] md:w-96 lg:w-auto">
          {data[0]?.person &&
            data.map(
              (item) =>
                item.person.image && (
                  <a
                    key={item.person.id}
                    href={item.person.url}
                    target="blank"
                    className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <div className="mt-4 mr-0 bg-gray-300 shadow-lg cursor-pointer shadow-black">
                      <div className="bg-red-700 p-3">
                        <div className="flex justify-center">
                          <h3 className="text-white font-extrabold text-lg">
                            {item?.person?.name}
                          </h3>
                        </div>
                        <img
                          className="object-fill h-56 w-full rounded-lg"
                          src={item.person.image?.medium}
                          alt={item?.person?.name}
                        />
                      </div>
                      <div className="p-3">
                        {
                          <h4>
                            Country : {item?.person?.country?.name || "N/A"}
                          </h4>
                        }
                      </div>
                    </div>
                  </a>
                )
            )}
        </div>
      );
    case "shows":
      return (
        <div className="grid grid-cols-4 gap-4 justify-center mx-10 p-6 min-w-[1/4] md:w-96 lg:w-auto">
          {data[0]?.show &&
            data.map(
              (item) =>
                item.show.image &&
                item.show.summary && (
                  <a
                    key={item.show.id}
                    href={item.show.url}
                    target="blank"
                    className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <div className="mt-4 mr-0 bg-gray-300 shadow-lg cursor-pointer shadow-black rounded-sm h-full">
                      <div className="bg-red-700 p-3 h-full">
                        <div className="flex justify-between">
                          <h3 className="text-white font-extralight">
                            Name : {item?.show?.name}
                          </h3>
                          <h3>
                            Rating : {item?.show?.rating?.average || "N/A"}
                          </h3>
                        </div>
                        <img
                          className="object-fill h-56 w-full rounded-lg"
                          src={item.show.image?.medium}
                          alt={item?.show?.name}
                        />
                      </div>
                      <div className="p-3 bg-gray-50">
                        {
                          <div className="h-40 overflow-auto">
                            <span>Summary :</span>
                            <div className="px-2 font-thin text-justify text-black">
                              {item?.show?.summary
                                .replace(/<[^>]*>/g, " ")
                                .replace(/\s{2,}/g, " ")
                                .trim()}
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </a>
                )
            )}
        </div>
      );
    default:
      return;
  }
};

export default Item;
