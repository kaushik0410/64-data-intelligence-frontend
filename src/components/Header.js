import { Bookmark, ChevronLeft, Filter, LineChart, Pin, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
    const selectedCount = 2;
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <ChevronLeft size={26} />
                <p style={{ fontWeight: "bold" }}>Economic Monitor</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Search style={{ margin: "0 10px", padding: "10px", border: "1px solid #a5a4a4ff", borderRadius: "10px" }} />
                <Bookmark style={{ margin: "0 10px", padding: "10px", border: "1px solid #a5a4a4ff", borderRadius: "10px" }} />
                <Filter style={{ margin: "0 10px", padding: "10px", border: "1px solid #a5a4a4ff", borderRadius: "10px" }} />
                <p style={{ padding: "0 10px", fontWeight: "bold" }}>Selected ({selectedCount})</p>
                <ShoppingCart style={{ margin: "0 10px", padding: "10px", border: "1px solid #a5a4a4ff", borderRadius: "10px" }} />
                <Pin style={{ margin: "0 10px", padding: "10px", border: "1px solid #a5a4a4ff", borderRadius: "10px" }} />
                <button style={{ display: "flex", flexDirection: "row", margin: "10px", borderRadius: "10px", alignItems: "center", gap: "5px", fontWeight: "bold" }}>
                    <LineChart />
                    <p>View Graph</p>
                </button>
            </div>
        </div>
    )
}

export default Header
