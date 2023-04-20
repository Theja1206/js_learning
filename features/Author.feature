 Feature:Author and books
 
    Scenario:Correct non-zero number of books found by author

        Given I have the following books in store
            | title                               | author      |
            | The Devil in the white city         | Erik Larson |
            | The Lion,the Withc and the Wardrobe | C.S.Lewis   |
            | In the Garden of Beasts             | Erik Larson |
        When  I search for books by author 'Erik Larson'
        Then  I find 2 books