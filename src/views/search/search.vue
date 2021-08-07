<template>
  <div class="search">
    <div class="search__wrapper">
      <div class="search__inner">
        <div class="search__input__wrapper">
          <input
            @input="search"
            v-model="query"
            placeholder="Search"
            type="text"
            class="search__input"
          />
        </div>
        <div class="search__table__wrapper">
          <table class="search__table">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author of the book</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in result.items"
                :key="row.id"
              >
                <td class="search__table__cell-img">
                  <img
                    v-if="row.volumeInfo.imageLinks.smallThumbnail"
                    class="search__table__img"
                    :src="row.volumeInfo.imageLinks.smallThumbnail"
                    alt=""
                  />
                </td>
                <td>{{ row.volumeInfo.title }}</td>
                <td>
                  <span v-if="row.volumeInfo.authors">{{
                    row.volumeInfo.authors.join(", ")
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";

export default {
  data() {
    return {
      query: null,
      loading: false,
      result: {
        "kind": "books#volumes",
        "totalItems": 473,
        "items": [
          {
            "kind": "books#volume",
            "id": "u13hVoYVZa8C",
            "etag": "+yfeYYswBk4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/u13hVoYVZa8C",
            "volumeInfo": {
              "title": "Planning Extreme Programming",
              "authors": [
                "Mike Hendrickson",
                "Kent Beck",
                "Martin Fowler"
              ],
              "publisher": "Addison-Wesley Professional",
              "publishedDate": "2001",
              "description": "A guide to XP leads the developer, project manager, and team leader through the software development planning process, offering real world examples and tips for reacting to changing environments quickly and efficiently.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "0201710919"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9780201710915"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 139,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 4,
              "ratingsCount": 6,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.0.2.0.preview.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=u13hVoYVZa8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=u13hVoYVZa8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=u13hVoYVZa8C&printsec=frontcover&dq=programming&hl=&cd=1&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=u13hVoYVZa8C&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Planning_Extreme_Programming.html?hl=&id=u13hVoYVZa8C"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=u13hVoYVZa8C&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Specific topics include: Planning and the four key variables: cost, quality, time, and scope Deciding how many features to incorporate into a release Estimating scope, time, and effort for user stories Prioritizing user stories Balancing ..."
            }
          },
          {
            "kind": "books#volume",
            "id": "sWcPAQAAMAAJ",
            "etag": "NRUFWaAmrqc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/sWcPAQAAMAAJ",
            "volumeInfo": {
              "title": "Programming Pearls",
              "authors": [
                "Jon Louis Bentley"
              ],
              "publisher": "Assn for Computing Machinery",
              "publishedDate": "1986",
              "description": "Software -- Software Engineering.",
              "industryIdentifiers": [
                {
                  "type": "OTHER",
                  "identifier": "UOM:49015000538810"
                }
              ],
              "readingModes": {
                "text": false,
                "image": false
              },
              "pageCount": 195,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 5,
              "ratingsCount": 1,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.0.1.0.preview.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=sWcPAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=sWcPAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=sWcPAQAAMAAJ&q=programming&dq=programming&hl=&cd=2&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=sWcPAQAAMAAJ&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Programming_Pearls.html?hl=&id=sWcPAQAAMAAJ"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "NO_PAGES",
              "embeddable": false,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=sWcPAQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "NONE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Software -- Software Engineering. This book is a collection and expansion of the column, &quot;Programming Pearls,&quot; published in Communication of the Association for Computing Machinery."
            }
          },
          {
            "kind": "books#volume",
            "id": "pXDzdJ_1E3oC",
            "etag": "stFA6nLpHtQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/pXDzdJ_1E3oC",
            "volumeInfo": {
              "title": "Practical C++ Programming",
              "authors": [
                "Steve Oualline"
              ],
              "publisher": "\"O'Reilly Media, Inc.\"",
              "publishedDate": "2003",
              "description": "Teaches the programming language, covering topics including syntax, coding standards, object classes, templates, debugging, and the C++ preprocessor.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "0596004192"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9780596004194"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 549,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 4,
              "ratingsCount": 19,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.3.0.0.preview.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=pXDzdJ_1E3oC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=pXDzdJ_1E3oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=pXDzdJ_1E3oC&printsec=frontcover&dq=programming&hl=&cd=3&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=pXDzdJ_1E3oC&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Practical_C++_Programming.html?hl=&id=pXDzdJ_1E3oC"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": true
              },
              "webReaderLink": "http://play.google.com/books/reader?id=pXDzdJ_1E3oC&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Teaches the programming language, covering topics including syntax, coding standards, object classes, templates, debugging, and the C++ preprocessor."
            }
          },
          {
            "kind": "books#volume",
            "id": "l4zO3OWkdIsC",
            "etag": "Sdq/gBF4dpM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/l4zO3OWkdIsC",
            "volumeInfo": {
              "title": "Extreme Programming Installed",
              "authors": [
                "Ron Jeffries",
                "Ann Anderson",
                "Chet Hendrickson"
              ],
              "publisher": "Addison-Wesley Professional",
              "publishedDate": "2001",
              "description": "Extreme programming. The circle of life. On-site customer. User stories. Acceptance tests. Sidebar: Acceptance test samples. Story estimation. Interlude: Sense of completion. Small releases. Customer defines release. Interation planning. Quick design session. Programming. Sidebar: Code Quality. Pair programming. Unit tests. Sidebar: xUnit. Test first, by intention. Releasing changes. Do or do not. Experience improves estimates. Resources, scope, quality, time. Steering. Steering the interation. steering the release. Handling defects. Sidebar: Advanced Issue: Defect databases; Advanced practice: Tests as database. Conclusion. Bonus tracks: We'll try. How to estimate anything. Infrastructure. It's chet's fault. Balancing hopes and fears. Testing improves code. XPer tries Java. A Java perspective. A true story. Estmates and promises. Everything that could possibly break.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "0201708426"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9780201708424"
                }
              ],
              "readingModes": {
                "text": true,
                "image": false
              },
              "pageCount": 265,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 3,
              "ratingsCount": 5,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.0.2.0.preview.2",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=l4zO3OWkdIsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=l4zO3OWkdIsC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=l4zO3OWkdIsC&dq=programming&hl=&cd=4&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=l4zO3OWkdIsC&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Extreme_Programming_Installed.html?hl=&id=l4zO3OWkdIsC"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "NO_PAGES",
              "embeddable": false,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=l4zO3OWkdIsC&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "NONE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "This book conveys the essence of the XP approach--techniques for implementation, obstacles likely to be encountered, and experience-based advice for successful execution."
            }
          },
          {
            "kind": "books#volume",
            "id": "Sxss1kQxfP0C",
            "etag": "OGYIvCq66H0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Sxss1kQxfP0C",
            "volumeInfo": {
              "title": "The Way to Go",
              "subtitle": "A Thorough Introduction to the Go Programming Language",
              "authors": [
                "Ivo Balbaert"
              ],
              "publisher": "iUniverse",
              "publishedDate": "2012",
              "description": "This book provides the reader with a comprehensive overview of the new open source programming language Go (in its first stable and maintained release Go 1) from Google. The language is devised with Java / C#-like syntax so as to feel familiar to the bulk of programmers today, but Go code is much cleaner and simpler to read, thus increasing the productivity of developers. You will see how Go: simplifies programming with slices, maps, structs and interfaces incorporates functional programming makes error-handling easy and secure simplifies concurrent and parallel programming with goroutines and channels And you will learn how to: make use of Go's excellent standard library program Go the idiomatic way using patterns and best practices in over 225 working examples and 135 exercises This book focuses on the aspects that the reader needs to take part in the coming software revolution using Go.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781469769165"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1469769166"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 628,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 2,
              "ratingsCount": 1,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.1.0.preview.3",
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=Sxss1kQxfP0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=Sxss1kQxfP0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=Sxss1kQxfP0C&printsec=frontcover&dq=programming&hl=&cd=5&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=Sxss1kQxfP0C&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/The_Way_to_Go.html?hl=&id=Sxss1kQxfP0C"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.co.uz/books/download/The_Way_to_Go-sample-epub.acsm?id=Sxss1kQxfP0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=Sxss1kQxfP0C&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "This book provides the reader with a comprehensive overview of the new open source programming language Go (in its first stable and maintained release Go 1) from Google."
            }
          },
          {
            "kind": "books#volume",
            "id": "UmRSCwAAQBAJ",
            "etag": "HaaPupopiMc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/UmRSCwAAQBAJ",
            "volumeInfo": {
              "title": "Learning Scientific Programming with Python",
              "authors": [
                "Christian Hill"
              ],
              "publisher": "Cambridge University Press",
              "publishedDate": "2016-01-31",
              "description": "Learn to master basic programming tasks from scratch with real-life scientific examples in this complete introduction to Python.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781107075412"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1107075416"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 482,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=UmRSCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=UmRSCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=UmRSCwAAQBAJ&printsec=frontcover&dq=programming&hl=&cd=6&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=UmRSCwAAQBAJ&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Scientific_Programming_with_Pyt.html?hl=&id=UmRSCwAAQBAJ"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=UmRSCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Learn to master basic programming tasks from scratch with real-life scientific examples in this complete introduction to Python."
            }
          },
          {
            "kind": "books#volume",
            "id": "obqOzQEACAAJ",
            "etag": "2cPPHXaHZzo",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/obqOzQEACAAJ",
            "volumeInfo": {
              "title": "Computer Programming in C for Beginners",
              "authors": [
                "Avelino J. Gonzalez"
              ],
              "publisher": "Springer",
              "publishedDate": "2020-11-02",
              "description": "This textbook is an ideal introduction in college courses or self-study for learning computer programming using the C language. Written for those with minimal or no programming experience, Computer Programming in C for Beginners offers a heavily guided, hands-on approach that enables the reader to quickly start programming, and then progresses to cover the major concepts of C programming that are critical for an early stage programmer to know and understand. While the progression of topics is conventional, their treatment is innovative and designed for rapid understanding of the many concepts in C that have traditionally proven difficult for beginners, such as variable typing and scope, function definition, passing by value, pointers, passing by reference, arrays, structures, basic memory management, dynamic memory allocation, and linked lists, as well as an introductory treatment of searching and sorting algorithms. Written in an informal but clear narrative, the book uses extensive examples throughout and provides detailed guidance on how to write the C code to achieve the objectives of the example problems. Derived from the author’s many years of teaching hands-on college courses, it encourages the reader to follow along by programming the progressively more complex exercise programs presented. In some sections, errors are purposely inserted into the code to teach the reader about the common pitfalls of programming in general, and the C language in particular.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "3030507491"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9783030507497"
                }
              ],
              "readingModes": {
                "text": false,
                "image": false
              },
              "pageCount": 193,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=obqOzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=obqOzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=obqOzQEACAAJ&dq=programming&hl=&cd=7&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=obqOzQEACAAJ&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Computer_Programming_in_C_for_Beginners.html?hl=&id=obqOzQEACAAJ"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "NO_PAGES",
              "embeddable": false,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=obqOzQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "NONE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Written in an informal but clear narrative, the book uses extensive examples throughout and provides detailed guidance on how to write the C code to achieve the objectives of the example problems."
            }
          },
          {
            "kind": "books#volume",
            "id": "OJwXEAAAQBAJ",
            "etag": "rbojfl7nFAA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/OJwXEAAAQBAJ",
            "volumeInfo": {
              "title": "Beginning Rust Programming",
              "authors": [
                "Ric Messier"
              ],
              "publisher": "John Wiley & Sons",
              "publishedDate": "2021-03-09",
              "description": "This is not your typical programming book! Jump right in with interesting, useful programs, some of which are drawn from classic computer science problems as a way of talking about the programming constructs in the language rather than explaining everything in a dry, theoretical manner that doesn’t translate well to implementation. Rust programming has been the \"most loved programming language\" in the Stack Overflow Developer Survey every year since 2016! Learn why programmers are using Rust due to it's performance and efficency, without the errors and crashes that a programmer would find in common languages such as C and C++. Built around solving real problems, this book will help introduce you to computer science problems that can be built upon to create solutions for other problems. LEARN BY DOING: This book will focus on a practical approach to learing Rust. You will learn all of the language fundamentals through the use of programming examples that do interesting things! All of the programs covered will be based on a computer science problem or othre interesting problems that can be used as a foundation for demonstrating language syntax, data types and structures, and other features or techniques for developing programs.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781119712978"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1119712971"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 416,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.0.0.preview.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=OJwXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=OJwXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=OJwXEAAAQBAJ&printsec=frontcover&dq=programming&hl=&cd=8&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=OJwXEAAAQBAJ&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Beginning_Rust_Programming.html?hl=&id=OJwXEAAAQBAJ"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=OJwXEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Designed from the ground up to give you a running start to using the multiparadigm system programming language, this book will teach you to: Solve real-world computer science problems of practical importance Use Rust’s rich type system ..."
            }
          },
          {
            "kind": "books#volume",
            "id": "jcUbTcr5XWwC",
            "etag": "3degKyeQmWI",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/jcUbTcr5XWwC",
            "volumeInfo": {
              "title": "The Ruby Programming Language",
              "subtitle": "Everything You Need to Know",
              "authors": [
                "David Flanagan",
                "Yukihiro Matsumoto"
              ],
              "publisher": "\"O'Reilly Media, Inc.\"",
              "publishedDate": "2008-01-25",
              "description": "The Ruby Programming Language is the authoritative guide to Ruby and provides comprehensive coverage of versions 1.8 and 1.9 of the language. It was written (and illustrated!) by an all-star team: David Flanagan, bestselling author of programming language \"bibles\" (including JavaScript: The Definitive Guide and Java in a Nutshell) and committer to the Ruby Subversion repository. Yukihiro \"Matz\" Matsumoto, creator, designer and lead developer of Ruby and author of Ruby in a Nutshell, which has been expanded and revised to become this book. why the lucky stiff, artist and Ruby programmer extraordinaire. This book begins with a quick-start tutorial to the language, and then explains the language in detail from the bottom up: from lexical and syntactic structure to datatypes to expressions and statements and on through methods, blocks, lambdas, closures, classes and modules. The book also includes a long and thorough introduction to the rich API of the Ruby platform, demonstrating -- with heavily-commented example code -- Ruby's facilities for text processing, numeric manipulation, collections, input/output, networking, and concurrency. An entire chapter is devoted to Ruby's metaprogramming capabilities. The Ruby Programming Language documents the Ruby language definitively but without the formality of a language specification. It is written for experienced programmers who are new to Ruby, and for current Ruby programmers who want to challenge their understanding and increase their mastery of the language.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "0596554656"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9780596554651"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 448,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 4.5,
              "ratingsCount": 10,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": true,
              "contentVersion": "0.5.5.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=jcUbTcr5XWwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=jcUbTcr5XWwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=jcUbTcr5XWwC&printsec=frontcover&dq=programming&hl=&cd=9&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=jcUbTcr5XWwC&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=jcUbTcr5XWwC"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 42.99,
                "currencyCode": "USD"
              },
              "retailPrice": {
                "amount": 42.99,
                "currencyCode": "USD"
              },
              "buyLink": "https://play.google.com/store/books/details?id=jcUbTcr5XWwC&rdid=book-jcUbTcr5XWwC&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 42990000,
                    "currencyCode": "USD"
                  },
                  "retailPrice": {
                    "amountInMicros": 42990000,
                    "currencyCode": "USD"
                  }
                }
              ]
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true
              },
              "pdf": {
                "isAvailable": true
              },
              "webReaderLink": "http://play.google.com/books/reader?id=jcUbTcr5XWwC&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "This book begins with a quick-start tutorial to the language, and then explains the language in detail from the bottom up: from lexical and syntactic structure to datatypes to expressions and statements and on through methods, blocks, ..."
            }
          },
          {
            "kind": "books#volume",
            "id": "w-P7DwAAQBAJ",
            "etag": "Y6yydcWWzXE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/w-P7DwAAQBAJ",
            "volumeInfo": {
              "title": "Integer Programming",
              "authors": [
                "Laurence A. Wolsey"
              ],
              "publisher": "John Wiley & Sons",
              "publishedDate": "2020-10-20",
              "description": "A PRACTICAL GUIDE TO OPTIMIZATION PROBLEMS WITH DISCRETE OR INTEGER VARIABLES, REVISED AND UPDATED The revised second edition of Integer Programming explains in clear and simple terms how to construct custom-made algorithms or use existing commercial software to obtain optimal or near-optimal solutions for a variety of real-world problems. The second edition also includes information on the remarkable progress in the development of mixed integer programming solvers in the 22 years since the first edition of the book appeared. The updated text includes information on the most recent developments in the field such as the much improved preprocessing/presolving and the many new ideas for primal heuristics included in the solvers. The result has been a speed-up of several orders of magnitude. The other major change reflected in the text is the widespread use of decomposition algorithms, in particular column generation (branch-(cut)-and-price) and Benders’ decomposition. The revised second edition: Contains new developments on column generation Offers a new chapter on Benders’ algorithm Includes expanded information on preprocessing, heuristics, and branch-and-cut Presents several basic and extended formulations, for example for fixed cost network flows Also touches on and briefly introduces topics such as non-bipartite matching, the complexity of extended formulations or a good linear program for the implementation of lift-and-project Written for students of integer/mathematical programming in operations research, mathematics, engineering, or computer science, Integer Programming offers an updated edition of the basic text that reflects the most recent developments in the field.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781119606536"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1119606535"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 384,
              "printType": "BOOK",
              "categories": [
                "Mathematics"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=w-P7DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=w-P7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.uz/books?id=w-P7DwAAQBAJ&printsec=frontcover&dq=programming&hl=&cd=10&source=gbs_api",
              "infoLink": "http://books.google.co.uz/books?id=w-P7DwAAQBAJ&dq=programming&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Integer_Programming.html?hl=&id=w-P7DwAAQBAJ"
            },
            "saleInfo": {
              "country": "UZ",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "UZ",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=w-P7DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "The revised second edition: Contains new developments on column generation Offers a new chapter on Benders&#39; algorithm Includes expanded information on preprocessing, heuristics, and branch-and-cut Presents several basic and extended ..."
            }
          }
        ]
      }

    };
  },
  methods: {
    async onChangePage() {

    },
    async search() {

    },
  },
};
</script>
