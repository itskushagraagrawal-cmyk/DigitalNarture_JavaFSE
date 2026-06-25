SET SERVEROUTPUT ON;

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);


INSERT INTO Customers
VALUES (
    1,
    'John Doe',
    TO_DATE('1950-05-15','YYYY-MM-DD'),
    15000,
    SYSDATE,
    NULL
);

INSERT INTO Customers
VALUES (
    2,
    'Jane Smith',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    8000,
    SYSDATE,
    NULL
);

INSERT INTO Customers
VALUES (
    3,
    'Robert Wilson',
    TO_DATE('1955-03-10','YYYY-MM-DD'),
    12000,
    SYSDATE,
    NULL
);

INSERT INTO Loans
VALUES (
    1,
    1,
    5000,
    8,
    SYSDATE,
    ADD_MONTHS(SYSDATE,12)
);

INSERT INTO Loans
VALUES (
    2,
    2,
    7000,
    10,
    SYSDATE,
    ADD_MONTHS(SYSDATE,40)
);

INSERT INTO Loans
VALUES (
    3,
    3,
    10000,
    9,
    SYSDATE,
    ADD_MONTHS(SYSDATE,1)
);

COMMIT;

-- SCENARIO 1


DECLARE

    CURSOR customer_cursor IS
        SELECT CustomerID,
               FLOOR(MONTHS_BETWEEN(SYSDATE,DOB)/12) Age
        FROM Customers;

BEGIN

    FOR customer_rec IN customer_cursor LOOP

        IF customer_rec.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = customer_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount Applied To Customer ID '
                || customer_rec.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/

-- SCENARIO 2

DECLARE

    CURSOR vip_cursor IS
        SELECT CustomerID,
               Balance
        FROM Customers;

BEGIN

    FOR customer_rec IN vip_cursor LOOP

        IF customer_rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID =
                  customer_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'VIP Status Granted To Customer '
                || customer_rec.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/

-- SCENARIO 3

DECLARE

    CURSOR loan_cursor IS

        SELECT c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.EndDate
              BETWEEN SYSDATE
              AND SYSDATE + 30;

BEGIN

    FOR loan_rec IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan '
            || loan_rec.LoanID
            || ' for '
            || loan_rec.Name
            || ' is due on '
            || TO_CHAR(
                loan_rec.EndDate,
                'DD-MON-YYYY'
            )
        );

    END LOOP;

END;
/
