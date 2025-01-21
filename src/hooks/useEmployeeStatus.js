import { useMemo } from "react";

export function useEmployeeStatus(start_date) {
    const yearsWorked = useMemo(() => {
        if (!start_date) return 0;
        const today = new Date();
        const start = new Date(start_date);

        let years = today.getFullYear() - start.getFullYear();

        if (
            today.getMonth() < start.getMonth() ||
            (today.getMonth() === start.getMonth() && today.getDate() < start.getDate())
        ) {
            years -= 1;
        }

        return years;
    }, [start_date]);

    const isProbation = yearsWorked < 0.5;
    const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

    return { yearsWorked, isProbation, isAnniversary };
}
