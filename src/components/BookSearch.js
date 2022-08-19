import React from "react";

function BookSearch() {
    return (
        <div>
            <input placeholder="검색어를 입력해주세요"></input>
            <hr/>
            <div>
                <select>
                    <option>9개</option>
                    <option>12개</option>
                    <option>15개</option>
                </select>
            </div>
        </div>
    )
}
export default BookSearch;