

Feature: This file will demonstrate the basic understanding of a frameworks feature file


    @TestCase1
    Scenario Outline: Multiple Scenarios and Actions

        Given User Lands on any given home page
        Then Go to MyTrips page
        And Enter <confirmation number>,<First Name>,<Last Name>

        Examples:
        | confirmation number | First Name | Last Name |
        | 1234567             | Srikanth   |Athikari   |