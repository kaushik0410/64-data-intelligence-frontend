import { Bookmark, BookmarkCheck, MinusSquare, MoreVertical, Pin, PinOff, PlusSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

const Frequents = ({currentData}) => {
    const frequents = Object.entries(currentData.frequent);
    const [bookmarks, setBookmarks] = useState({});
    const [lists, setLists] = useState({});
    const [pinned, setPinned] = useState({});

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = frequents.slice(startIndex, endIndex);

    const totalPages = Math.ceil(frequents.length / itemsPerPage);

    const goNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const goPrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [currentData]);

    const toggleBookmark = (id) => {
        setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleList = (id) => {
        setLists(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const togglePin = (id) => {
        setPinned(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="hide-scrollbar" style={{ display: "flex", flexDirection: "column", margin: "10px", overflowY: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr", textAlign: "left", fontWeight: "bolder", backgroundColor: "#000", color: "white", padding: "12px 10px", borderRadius: "5px" }}>
                <p>New Release</p>
                <p>Range</p>
                <p>Unit</p>
                <p>Coverage</p>
                <p>Action</p>
            </div>
            {paginatedData.map(([key, item], index) => (
                <div key={index} style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr", width: "100vw", maxWidth: "100%", boxSizing: "border-box", alignItems: "center", padding: "12px 10px", backgroundColor: index % 2 === 0 ? "#ffffffff" : "#f2f2f2", borderRadius: "4px", textAlign: "left" }}>
                    <div>
                        <p style={{ fontWeight: "bold" }}>{item.title}</p>
                        <p>{item.cat} / {item.subCat}</p>
                    </div>
                    <div>
                        <p>{item.subset !== "" ? item.subset : item.freq}</p>
                    </div>
                    <div>
                        <p>{item.unit}</p>
                    </div>
                    <div>
                        <p>{item.src}</p>
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div onClick={() => toggleBookmark(item.id)}>
                            {bookmarks[item.id] ? (
                                <BookmarkCheck size={20} color="green" />
                            ) : (
                                <Bookmark size={20} />
                            )}
                        </div>
                        <div onClick={() => toggleList(item.id)}>
                            {lists[item.id] ? (
                                <MinusSquare size={20} color="red" />
                            ) : (
                                <PlusSquare size={20} />
                            )}
                        </div>
                        <div onClick={() => togglePin(item.id)}>
                            {pinned[item.id] ? (
                                <PinOff size={20} color="orange" />
                            ) : (
                                <Pin size={20} />
                            )}
                        </div>
                        <div>
                            <MoreVertical />
                        </div>
                    </div>
                </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
                <button
                    disabled={currentPage === 1}
                    onClick={goPrev}
                    style={{
                        padding: "8px 16px",
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        opacity: currentPage === 1 ? 0.5 : 1
                    }}
                >
                    Previous
                </button>

                <span style={{ fontWeight: "bold" }}>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    disabled={currentPage === totalPages}
                    onClick={goNext}
                    style={{
                        padding: "8px 16px",
                        cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                        opacity: currentPage === totalPages ? 0.5 : 1
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Frequents
