Feature: Calculate the validations

    Multiple Scenario to vaildate the arithmetic operations

    #Scenario: Adding two numbers
    #   Given the numbers are 10,35
    #  When numbers are added
    # Then result should be 45


    #Scenario: Adding two numbers
    #   Given the numbers are 230,454
    #  When numbers are added
    # Then result should be 684

    Scenario Outline: Adding two numbers
        Given the numbers are <number1>,<number2>
        When numbers are added
        Then result should be <val>

        Examples:
            | number1 | number2 | val |
            | 100     | 100     | 200 |
            | 391     | 100     | 491 |