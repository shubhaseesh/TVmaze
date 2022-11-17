import ImageNotAvailable from "../assets/No_image.png";

const Item = ({ data, category }) => {
  switch (category) {
    case "people":
      return (
        <div className="grid grid-cols-3 gap-4 justify-center mx-10 p-6 min-w-[1/4]">
          {data[0]?.person &&
            data.map((item) => (
              <a key={item.person.id} href={item.person.url} target="blank">
                <div className="mt-4 mr-0 bg-gray-300 shadow-lg cursor-pointer shadow-black rounded-sm">
                  <div className="bg-sky-300 p-3">
                    <img
                      className="object-fill h-56 w-full rounded-sm"
                      src={item.person.image?.medium || ImageNotAvailable}
                      alt={item?.person?.name}
                    />
                  </div>
                  <div className="p-3">
                    {<h4>Name : {item?.person?.name}</h4>}
                    {<h4>Country : {item?.person?.country?.name || "N/A"}</h4>}
                  </div>
                </div>
              </a>
            ))}
        </div>
      );
    case "shows":
      return (
        <div className="grid grid-cols-3 gap-4 justify-center mx-10 p-6 min-w-[1/4]">
          {data[0]?.show &&
            data.map((item) => (
              <a key={item.show.id} href={item.show.url} target="blank">
                <div className="mt-4 mr-0 bg-gray-300 shadow-lg cursor-pointer shadow-black rounded-sm">
                  <div className="bg-sky-300 p-3">
                    <img
                      className="object-fill h-56 w-full rounded-sm"
                      src={item.show.image?.medium || ImageNotAvailable}
                      alt={item?.show?.name}
                    />
                  </div>
                  <div className="p-3">
                    {<h4>Name : {item?.show?.name}</h4>}
                    {<h4>Rating : {item?.show?.rating?.average || "N/A"}</h4>}
                    {
                      <div className="h-40 overflow-auto">
                        <span>Summary :</span>
                        <div
                          className="px-2 italic"
                          dangerouslySetInnerHTML={{
                            __html: item?.show?.summary,
                          }}
                        />
                      </div>
                    }
                  </div>
                </div>
              </a>
            ))}
        </div>
      );
    default:
      return;
  }
};

export default Item;
