// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract BookDatabase {
    struct Book {
        string title;
        uint16 year;
    }

    uint32 private nextId = 0;
    mapping(uint32 => Book) public books;
    uint256 public count;
    address private immutable owner;

    constructor() {
        owner = msg.sender;
    }

    function addBook(Book memory new_book) public {
        nextId++;
        books[nextId] = new_book;
        count++;
    }

    function compare(
        string memory str1,
        string memory str2
    ) private pure returns (bool) {
        bytes memory arr1 = bytes(str1);
        bytes memory arr2 = bytes(str2);
        return arr1.length == arr2.length && keccak256(arr1) == keccak256(arr2);
    }

    function editBook(uint32 id, Book memory new_book) public {
        Book memory old_book = books[id];
        if (!compare(old_book.title, new_book.title) &&
            !compare(new_book.title, "")
        ) {
            books[id].title = new_book.title;
        }
        if (old_book.year != new_book.year && new_book.year > 0) {
            books[id].year = new_book.year;
        }
    }

    function removeBook(uint32 id) public ownerOnly returns (bool) {
        if (books[id].year > 0 && !compare(books[id].title, "")) {
            delete books[id];
            count--;
            return true;
        }
        return false;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "You don't have permission");
        _;
    }
}
