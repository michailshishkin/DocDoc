Feature: Doctors > Doctors issuing page: Filter "Schedule" on issuing doctors
  Scenario: Day Selection
    Given The site page "/doctor" is open
    Then 10 doctor cards are displayed per page
    Then The "Schedule (filter)" button is displayed
    Then The title of the "Schedule (filter)" button contains the text
    """
    Schedule for all days
    """
    When Click on the button "Schedule (filter)"
    Then The List of Values for Date Picker is displayed
    Then The "All days" item is checked in the "List of values for date picker"
    When Click on the "Tomorrow" item in the "List of values for date picker"
    Then The title of the "Schedule (filter)" button contains the text
    """
    Schedule for tomorrow
    """
    Then 10 doctor cards are displayed per page
    Then The doctors working on the selected day are displayed